import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:false
        }
    )name:String;

    @Column(`text`,
        {
            unique:false
        }
    )date:String;

    @Column(`text`,
        {
            unique:false
        }
    )guestName:String;

    @Column(`text`,
        {
            unique:false
        }
    )guestEmail:String;

    @Column(`number`,
        {
            unique:false
        }
    )guestCount:number;

    @Column(`text`,
        {
            unique:false
        }
    )specialRequests:String;
}
