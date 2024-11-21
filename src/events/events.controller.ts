import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @MessagePattern({cmd:`create-reservas`})
  create(@Payload() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @MessagePattern({cmd:`find-all`})
  findAll() {
    return this.eventsService.findAll();
  }

  @MessagePattern({cmd:`find-one`})
  findOne(@Payload('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @MessagePattern({cmd:`update-reserva`})
  update(@Payload() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(updateEventDto.id, updateEventDto);
  }

  @MessagePattern({cmd:`remove-reserva`})
  remove(@Payload('id') id: string) {
    return this.eventsService.remove(id);
  }
}
