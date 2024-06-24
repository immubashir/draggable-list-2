"use client";
import { useState } from 'react';
import { Reorder, useDragControls, motion } from 'framer-motion';
import Image from 'next/image';

const initialItems = [
    { id: 1, name: 'Meeting with CEO', date: '04 Jun 2024', time: '12:30 PM', description: 'Important meeting to discuss about plans.', location: 'Conference Room A', color: '#0E2954' },
    { id: 2, name: 'Team Meeting', date: '05 Jun 2024', time: '10:00 AM', description: 'Monthly team meeting to discuss project updates.', location: 'Conference Room C', color: '#1F6E8C' },
    { id: 3, name: 'Dinner with Julie', date: '08 Jun 2024', time: '8:00 PM', description: 'Dinner with Julie at 8:00', location: 'Seattle', color: '#5BBCFF' },
    { id: 4, name: 'Weekly Review', date: '12 Jun 2024', time: '11:00 AM', description: 'Weekly Review Session', location: 'Office Block B', color: '#3F3B6C' }
];

const List = () => {
    const [events, setEvents] = useState(initialItems);

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col w-1/2 h-full pl-28 items-center justify-center gap-10'>
                <motion.h1 
                initial = {{x:"-100%", opacity: 0}}
                whileInView={{x:0, opacity: 1, transition: {duration: 0.6}}}
                className='text-3xl mt-20 font-bold'>
                    Your Scheduled Events
                </motion.h1>
                <Image src="/calendar_icon.svg" height={200} width={200}/>
            </div>
            <div className='w-2/4 px-10'>
                <Reorder.Group
                    axis="y"
                    values={events}
                    onReorder={setEvents}
                    className='flex flex-col gap-4 text-black mt-4'
                >
                    {events.map((event) => (
                        <Reorder.Item className='relative' key={event.id} value={event}>
                            <div className='px-6 py-3 rounded-3xl bg-[#fff] text-black'>
                                <div className='flex items-center justify-between cursor-grab'>
                                    <div>
                                        <div className='flex gap-2 items-center justify-center'>
                                            <div className='h-4 w-4 rounded-full' style={{backgroundColor : event.color}}/>
                                            <p className='text-xl font-bold'>{event.name}</p>
                                        </div>
                                        <p className='font-bold text-gray-700'>{event.time}</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-md mt-6 text-gray-700'>at {event.date}</p>
                                    </div>
                                </div>
                                <div className='w-full h-[1px] bg-gray-600'/>
                                <p className=' font-semibold text-gray-500'>{event.location}</p>
                                <p className='text-lg font-semibold text-gray-500'>{event.description}</p>
                            </div>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </div>
    );
}

export default List;
