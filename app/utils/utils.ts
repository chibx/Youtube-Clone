import _dayjs from "dayjs";

export function initials(name: string) {
    return name
        .split(" ")
        .map((name) => name[0])
        .join("");
}

export function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });
}

function convert(date: Date) {
    const dayjs = _dayjs(date);
    const nowjs = _dayjs(new Date());

    const monthDiff = nowjs.diff(dayjs, "month");
    const dayDiff = nowjs.diff(dayjs, "day");
    const hoursDiff = nowjs.diff(dayjs, "hour");
    const minsDiff = nowjs.diff(dayjs, "minute");
    const secsDiff = nowjs.diff(dayjs, "second");

    switch (true) {
        case monthDiff > 0:
            return `${monthDiff} month${monthDiff > 1 ? "s" : ""}`;
        case dayDiff > 0:
            return `${dayDiff} day${dayDiff > 1 ? "s" : ""}`;
        case hoursDiff > 0:
            return `${hoursDiff} hour${hoursDiff > 1 ? "s" : ""}`;
        case minsDiff > 0:
            return `${minsDiff} minute${minsDiff > 1 ? "s" : ""}`;
        case secsDiff > 0:
            return `${secsDiff} second${secsDiff > 1 ? "s" : ""}`;
        default:
            return "";
    }
}

export function diffDate(date: Date | string): string {
    if (typeof date == "object") {
        return convert(date);
    }

    try {
        const _date = new Date(date);
        return convert(_date);
    } catch {
        return "";
    }
}

export function randomItems<T>(items: T[], count: number) {
    const shuffled: T[] = []
    const takenIndexes: number[] = []
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * items.length)
        if (takenIndexes.includes(randomIndex)) {
            i--
            continue
        }
        takenIndexes.push(randomIndex)
        shuffled.push(items[randomIndex]!)
    }

    return shuffled
}