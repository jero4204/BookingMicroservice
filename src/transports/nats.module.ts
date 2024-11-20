import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports:[
        ClientsModule.register([
            {
                name: "nats://localhost:4222",
                transport: Transport.NATS,
                options: {
                    servers: "nats://localhost:4222",
                }
            }
        ])
    ],
    exports:[
        ClientsModule.register([
            {
                name: "nats://localhost:4222",
                transport: Transport.NATS,
                options: {
                    servers: "nats://localhost:4222",
                }
            }
        ])
    ]
})

export class NatsModule{}