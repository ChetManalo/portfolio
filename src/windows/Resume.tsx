import { useContext } from "react";
import { ThemeProviderContext } from "../components/ThemeProvider";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import "./styles/resume.scss";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  const { theme } = useContext(ThemeProviderContext);
  const getFilePluginInstance = getFilePlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  return (
    <div id="resume">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <Viewer theme={theme} fileUrl="/resume.pdf" plugins={[defaultLayoutPluginInstance, getFilePluginInstance]} />
      </Worker>
    </div>
  )
}

export default Resume;