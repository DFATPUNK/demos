import { useState } from "react";
import "../styles/demoView.css";
import folderIcon from "../assets/icons/folder.png";
import openFolderIcon from "../assets/icons/open_folder.png";
import codeIcon from "../assets/icons/source_code.png";
import balatroIcon from "../assets/icons/balatro.png";
import homeIcon from "../assets/icons/home.png";
import bookIcon from "../assets/icons/book.png";
import calculatorIcon from "../assets/icons/calculator.png";
import demoIcon from "../assets/icons/open_params.png";
import closedDemoIcon from "../assets/icons/closed_params.png";

export default function MobileView() {
    const [demosOpen, setDemosOpen] = useState(true);
    const [booksOpen, setBooksOpen] = useState(false);
    const [githubOpen, setGithubOpen] = useState(false);   
  
    return (
      <div className="mobile-wrapper">
        <h1 className="mobile-title">Jérémy Brunet</h1>
        <div className="tree">

          {/* Demos */}
          <div className="tree-item">
            <div className="tree-button" onClick={() => setDemosOpen(!demosOpen)}>
                <img src={demosOpen ? demoIcon : closedDemoIcon} className="start-menu-icon" alt="folder" />
                Demos
            </div>
          </div>
          {demosOpen && (
            <div className="tree-subgroup">
              <div className="tree-subitem">
                <a href="/pg-calculator" target="_blank"><img src={calculatorIcon} className="start-menu-icon" />Parameter Golf Calculator
                Handy calculator made for OpenAI's Parameter Golf challenge.</a>
              </div>
              <div className="tree-subitem">
                <a href="/alan" target="_blank"><img src={codeIcon} className="start-menu-icon" />Zero-Touch Onboarding
                HR Demo for Alan</a>
              </div>
              <div className="tree-subitem">
                <a href="/balatro" target="_blank"><img src={balatroIcon} className="start-menu-icon" />Balatro Joker Generator
                Figma-to-App Demo</a>
              </div>
            </div>
          )}

          {/* Docs */}
          <div className="tree-item">
            <div className="tree-button" onClick={() => setBooksOpen(!booksOpen)}>
                <img src={booksOpen ? openFolderIcon : folderIcon} className="start-menu-icon" alt="folder" />
                Docs
            </div>
          </div>
          {booksOpen && (
            <div className="tree-subgroup">
              <div className="tree-subitem">
                <a href="https://writebook.jeremybrunet.com/3/alan.com" target="_blank"><img src={bookIcon} className="start-menu-icon" />Zero-Touch Onboarding</a>
              </div>
            </div>
          )}

          {/* Github */}
          <div className="tree-subgroup">
            <div className="tree-button" onClick={() => setGithubOpen(!githubOpen)}>
                <img src={githubOpen ? openFolderIcon : folderIcon} className="start-menu-icon" alt="folder" />
                Github
            </div>
          </div>
          {githubOpen && (
            <div className="tree-subgroup">
              <div className="tree-subitem">
                <a href="https://github.com/DFATPUNK/hr-onboarding-engine" target="_blank"><img src={codeIcon} className="start-menu-icon" />'Zero-Touch Onboarding'</a>
              </div>
              <div className="tree-subitem">
                <a href="https://github.com/DFATPUNK/balatro-card-generator" target="_blank"><img src={balatroIcon} className="start-menu-icon" />'Balatro Joker Generator'</a>
              </div>
              <div className="tree-subitem">
                <a href="https://github.com/DFATPUNK/pg-calculator" target="_blank"><img src={calculatorIcon} className="start-menu-icon" /> 'Parameter Golf Calculator'</a>
              </div>
            </div>
          )}

          {/* Back to Home */}
          <div className="tree-item">
            <a href="https://www.jeremybrunet.com"><img src={homeIcon} className="start-menu-icon" />Back to Home</a>
          </div>
        </div>
      </div>
    );
}