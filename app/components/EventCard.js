"use client"
import { PinContainer } from './EventPin';
import Image from 'next/image';

const EventCard = ({ event }) => {
    return (
        <>
            <div className="h-[40rem] w-full flex items-center justify-center z-0">
                <PinContainer
                    title={event.title}
                    event={event}
                >
                    <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] aspect-square ">
                            <Image
                                src={event.image}
                                alt={event.title}
                                layout="fill"
                                objectFit="cover"
                            />
                    </div>
                </PinContainer>
            </div>
        </>
    );
};

export default EventCard;