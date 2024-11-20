import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository:Repository<Event>
  ){}

  async create(createEventDto: CreateEventDto) {
    try{
      const event = this.eventRepository.create(createEventDto);
      await this.eventRepository.save(event)
      return event
    }catch(e){
      throw new InternalServerErrorException(`ya existe`);
    }
  }

  async findAll() {
    const events = await this.eventRepository.find({});
    return events;
  }

  async findOne(id: String) {
    const event = await this.eventRepository.findOneBy({id:id});
    if(!event){
      throw new NotFoundException(`Evento no encontrado`)
    }
    return event;
  }

  async update(id: String, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.preload({
      id:id,...updateEventDto
    })
    if(!event){
      throw new NotFoundException(`Evento no encontrado`);
    }
    await this.eventRepository.save(event);
    return event;
  }

  async remove(id: String) {
    const event = await this.findOne(id);
    this.eventRepository.delete(event);
    return event;
  }
}
