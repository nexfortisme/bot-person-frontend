import type { Event } from '@/interfaces/event.interface';
import type { User } from '@/interfaces/user.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const userStore = defineStore('user', () => {
  
    const user = ref({} as User)
    const events = ref([] as Event[])

    const setEvents = (setEvents: Event[]) => {
        events.value = setEvents;
    }

    const getEvents = () => {
        return events.value;
    }

    const eventCount = computed(() => {
        return events.value.length;
    })

    const setUser = (setUser: User) => {
        user.value = setUser;
    };

    const getUser = () => {
        return user.value;
    }

    const userStats = computed(() => {
        return user.value.UserStats;
    });

  return {
    getUser,
    setUser,
    getEvents,
    setEvents,
    eventCount,
    userStats
  }
})
