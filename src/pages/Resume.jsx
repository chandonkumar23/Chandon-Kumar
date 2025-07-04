import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const resumeFile ='https://drive.google.com/file/d/1vwdtTdfnM8xFdGAD8_lAXEhzQrX9k1y3/view'
const Resume = () => {
    const downloadFile =(url)=>{
        const resuneFile = url.split('/').pop()
        const file = document.createElement('a')
        file.href = url;
        file.setAttribute('download',resuneFile)
        document.body.appendChild(file);
        file.click();
        file.remove();
    }
    return (
        <div>
           
            <Link onClick={() =>{downloadFile(resumeFile)}} className="bg-green-500 p-1 text-white rounded-sm flex items-center shadow-2xl bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">Resume<MdFileDownload /></Link>
        </div>
    );
};

export default Resume;