import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import thoughImageUrl from '../../assets/thought.png'
import { useState } from "react";
import { FeedbackTypetStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Bug",
        image: {
            source: bugImageUrl,
            alt: 'Bug'
        }
    },
    IDEA: {
        title: "Idea",
        image: {
            source: ideaImageUrl,
            alt: 'Idea'
        }
    },
    OTHER: {
        title: "Other",
        image: {
            source: thoughImageUrl,
            alt: 'Other'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {
    const [feebackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col  items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                {!feebackType ? (
                <FeedbackTypetStep onFeedbackTypeChanged={setFeedbackType} />
                
            ): (
                <FeedbackContentStep 
                feedbackType={feebackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={()=> setFeedbackSent(true)}
                />
                )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                <small>&copy; Copyright , {(new Date().getFullYear())} <a className="underline" href="https://www.linkedin.com/in/jasse-gama-a6090830/" target="_blank">Jasse Gama</a>. All rights Reserved</small>
            </footer>

        </div>
    )
}