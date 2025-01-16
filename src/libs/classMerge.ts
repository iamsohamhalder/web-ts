import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

/* classMerge function merge the classes of an element */
function classMerge(...classes: ClassValue[]): string {
    return twMerge(clsx(...classes));
}

export default classMerge;
