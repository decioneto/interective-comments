import { Icon } from '@phosphor-icons/react';
import { ComponentProps, ElementType } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button> & ComponentProps<'button'>;

interface ButtonProps extends ButtonVariants {
    label: string;
    icon?: Icon;
}

const button = tv({
    base: 'h-12 px-8 rounded-lg text-white hover:brightness-110 transition-colors',
    variants: {
        color: {
            primary: 'bg-moderate-blue',
            secondary: 'bg-soft-red',
            default: 'bg-grayish-blue',
            linkPrimary:
                'bg-transparent text-moderate-blue font-medium w-fit px-2',
        },
        uppercase: {
            true: 'uppercase',
        },
    },
    defaultVariants: {
        color: 'primary',
        uppercase: false,
    },
});

export function Button({ label, color, uppercase, icon: Icon }: ButtonProps) {
    return (
        <button
            className={`${button({
                color,
                uppercase,
            })} flex items-center gap-2`}
        >
            {Icon && <Icon weight="fill" />}
            {label}
        </button>
    );
}
