'use client';

import { useState, useMemo } from 'react';
import Avatar from './ui/Avatar';
import { Button } from './ui/Button';
import { ShareFat, Plus, Minus } from '@phosphor-icons/react';
import { VariantProps, tv } from 'tailwind-variants';

interface CommentCardProps extends VariantProps<typeof comments> {}

const comments = tv({
    base: 'flex bg-white p-6 w-full items-start gap-6 rounded-lg',
    variants: {
        isReply: {
            true: 'w-[90%] self-end',
        },
    },
});

export function CommentCard({ isReply }: CommentCardProps) {
    const [likes, setLikes] = useState(false);
    const renderLikes = useMemo(
        () => <span className="text-moderate-blue font-medium">{0}</span>,
        [likes]
    );

    function addLike() {
        setLikes(true);
    }

    function removeLike() {
        setLikes(false);
    }

    return (
        <div className={comments({ isReply })}>
            <div className="flex flex-col justify-center items-center gap-4 bg-very-light p-4 rounded">
                <button onClick={addLike}>
                    <Plus className="text-light-grayish-blue" />
                </button>
                {renderLikes}
                <button onClick={removeLike}>
                    <Minus className="text-light-grayish-blue" />
                </button>
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Avatar name="Décio Neto" showName />
                        <div>1 month ago</div>
                    </div>
                    <Button label="Reply" color="linkPrimary" icon={ShareFat} />
                </div>
                <div className="text-grayish-blue">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus.
                </div>
            </div>
        </div>
    );
}
