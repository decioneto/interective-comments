import Avatar from './ui/Avatar';
import { Button } from './ui/Button';

export function UserInput() {
    return (
        <div className="w-full flex content-between gap-4 h-32 items-start bg-white px-6 py-4 rounded-lg">
            <Avatar name="Décio Neto" />
            <form className="flex-1 h-full flex gap-4">
                <textarea
                    placeholder="Add a comment"
                    className="resize-none w-full border bordeer-light-grey rounded-lg h-full p-[14px] placeholder:text-grayish-blue outline-none focus:border-grayish-blue transition-colors"
                />
                <Button label="Send" color="primary" type="submit" uppercase />
            </form>
        </div>
    );
}
