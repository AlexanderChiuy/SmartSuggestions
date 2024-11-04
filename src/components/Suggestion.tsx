import { ReactNode } from 'react';

interface Props {
    children: ReactNode
    link: string
}

function Suggestion({ children, link }: Props) {
  
  return (
    <a href={link} target="_blank">
        <div className="shadow-lg border-solid border-2 rounded-lg p-2 bg-white">
            {children}
        </div>
    </a>
  );
}

export default Suggestion;
