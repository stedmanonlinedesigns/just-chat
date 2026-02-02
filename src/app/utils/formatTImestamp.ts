import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(relativeTime)
dayjs.extend(calendar)

export type FirebaseTimestamp = {
    seconds: number;
    nanoseconds: number;
}

export const timestampToDayjs = (timestamp: FirebaseTimestamp | null | undefined) => {
    if (!timestamp) return null

    const milliseconds = timestamp.seconds * 1000
    return dayjs(milliseconds)
}

export const formatRelative = (timestamp: FirebaseTimestamp | null | undefined) => {
    const date = timestampToDayjs(timestamp)

    if (!date) return ''

    return date.fromNow()
}

export const formatCalendar = (timestamp: FirebaseTimestamp | null | undefined) => {
    const date = timestampToDayjs(timestamp)

    if (!date) return ''

    return date.calendar(null, {
        sameDay: '[Today at] h:mm A', // Today at 3:45 PM
        lastDay: '[Yesterday at] h:mm A', // Yesterday at 3:45 PM
        lastWeek: 'MMM D [at] h:mm A', // Jan 15 at 3:45 PM
        sameElse: 'MMM D, YYYY [at] h:mm A' // Jan 15, 2025 at 3:45 PM
    })
}

export const formatFull = (timestamp: FirebaseTimestamp | null | undefined) => {
    const date = timestampToDayjs(timestamp)

    if (!date) return ''

    return date.format('MMM D, YYYY [at] h:mm A')
}

export const formatTime = (timestamp: FirebaseTimestamp | null | undefined) => {
    const date = timestampToDayjs(timestamp)

    if (!date) return ''

    return date.format('h:mm A')
}

export const formatDate = (timestamp: FirebaseTimestamp | null | undefined) => {
    const date = timestampToDayjs(timestamp)

    if (!date) return ''

    return date.format('MMM D, YYYY')
}