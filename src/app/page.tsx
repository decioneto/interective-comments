import { Comment } from '@/components/Comment';
import { UserInput } from '@/components/UserInput';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto h-full w-full py-24 flex flex-col justify-end gap-8">
            <div className="flex flex-col gap-8 w-full justify-end items-end">
                <Comment />
            </div>
            <UserInput />
        </div>
    );
}
