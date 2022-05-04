import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.png'
import ideaImageUrl from '../assets/idea.png'
import thoughImageUrl from '../assets/thought.png'

const feedbackTypes = {
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

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col  items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Leave your feedback</span>
                <CloseButton />
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key,value]) => {
                    return(
                        <button
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        type="button"
                        >

                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>

            <footer className="text-xs text-neutral-400">
                <small>&copy; Copyright , {(new Date().getFullYear())} <a className="underline" href="https://www.linkedin.com/in/jasse-gama-a6090830/" target="_blank">Jasse Gama</a>. All rights Reserved</small>
            </footer>

        </div>
    )
}