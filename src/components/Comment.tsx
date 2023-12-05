import { CommentCard } from './CommentCard';

export function Comment() {
    return (
        <div className="flex flex-col gap-6">
            <CommentCard />
            <CommentCard isReply />
        </div>
    );
}
