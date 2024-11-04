import { useRootContext } from '../context/RootContext'
import Suggestion from './Suggestion';
import { runPrompt } from '../gemini/utils'
import { createLink } from '../helpers/helperFn'
import { useEffect, useMemo, useState } from 'react';
import magnify from '../images/magnify.png'

function SuggestionFrame() {
  const toggle = useRootContext();
  const prompt = `Create three questions in bullet point format based off this title: 
                    'Intro to Blockchains'. Denote bullet points with '*' and do not use '*' 
                     anywhere else in the question.`
  const [promptResult, setPrompResult] = useState<String>("");

  useEffect(() => {
    if (toggle) {
        runPrompt(prompt, {}).then((res) => {
            setPrompResult(res);
            console.log(promptResult)
         })
    }
  }, [toggle]);

  const suggestions = useMemo(
    () => promptResult !== "" ? promptResult.split("*").slice(1) : [],
    [promptResult]
  );

  return (
    <>
        {!toggle && 
            <div className="m-auto border-solid border-4 rounded-lg p-2 m-2 bg-blue-50">

                <div className="flex flex-row gap-4 w-full pb-4">
                    <img className="flex-left w-7 h-7" src={magnify} alt="Logo" />
                    <p className="flex-right text-lg font-semibold text-center">Search Next</p>
                </div>

                {suggestions.length > 0 &&
                    <div className="flex flex-col gap-2">
                        {suggestions.map((suggestion) => {
                            return <Suggestion link={createLink(suggestion)}>{suggestion}</Suggestion>
                        })}
                    </div>
                }
            </div>
        }
    </>
  );
}

export default SuggestionFrame;
