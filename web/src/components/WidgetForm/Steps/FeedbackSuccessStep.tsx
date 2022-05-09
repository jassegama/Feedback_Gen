import { CloseButton } from "../../CloseButton";
import sucessImgUrl from "../../../assets/success.png"

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;

}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
    return (
        <div>
            <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={sucessImgUrl} alt="Sucess" />

                <span className="text-xl mt-2">We appreciate your feedback</span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-x-brand-500 hover:ring-brand-500 focus:outline-none focus:ring-1"
                >
                    New feedback
                </button>
            </div>
            </>
        </div>
    )
}