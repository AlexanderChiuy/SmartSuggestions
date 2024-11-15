import CircularProgress from '@mui/material/CircularProgress';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode
    link: string
}

function Suggestion({ children, link }: Props) {
  
  return (
    <a href={link} target="_blank">
        <div className="shadow-lg border-solid border-2 rounded-lg p-2 bg-white">
            { link == "" ? 
                <CircularProgress className="text-center m-auto" size={26} /> : 
                children 
            }
        </div> 
    </a>
  );
}

export default Suggestion;
