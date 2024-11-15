import { useRootContext } from '../context/RootContext'
import Suggestion from './Suggestion';
import TemperatureConfigurations from './Configurations';
import { runPrompt, getTitle } from '../chrome/utils'
import { createLink } from '../helpers/helperFn'
import { useEffect, useMemo, useState } from 'react';
import magnify from '../images/magnify.png'
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';

const createPrompt = (title: string): string => {
    return `Create three questions in bullet point format based off this title: 
    '${title}'. Denote bullet points with '*' and do not use '*' 
     anywhere else in the question.`
}

function SuggestionFrame() {
  const toggle = useRootContext();
  
  const [promptResult, setPrompResult] = useState<string>("");
  const [temperatureConfig, setTemperatureConfig] = useState<string>("1");
  const [docTitle, setDocTitle] = useState<string>("");

  const promptFn = () => getTitle().then((dom) => {
        if (dom) {
            console.log(dom.title)
            console.log(temperatureConfig)
            setDocTitle(dom.title)
            runPrompt(createPrompt(docTitle), {temperature: temperatureConfig, topK: "3"}).then((res) => {
                setPrompResult(res);
            }) 
        }
    })

  useEffect(() => {
    if (toggle) {
        promptFn()
    }
  }, [toggle]);

  var suggestions = useMemo(
    () => promptResult !== "" ? promptResult.split("*").slice(1) : ["", "", ""],
    [promptResult]
  );

  return (
    <>
        {!toggle && 

            <>
                <TemperatureConfigurations setTemp={setTemperatureConfig} />
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
                    <Button className="m-2" variant="text" startIcon={<ReplayIcon />} onClick={() => { 
                        promptFn()  
                    }}>
                        Regenerate Suggestions
                    </Button>
                    
                </div>
            </>
        }
    </>
  );
}

export default SuggestionFrame;
