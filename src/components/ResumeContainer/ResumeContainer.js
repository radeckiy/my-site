import React, {Fragment} from 'react';
import Resume from '../../res/resume.pdf';
import './resumeContainer.css';

export default function ResumeContainer() {
    return(
        <Fragment>
            <details className="bg-light p-3">
                <summary><span className="summary-text">Моё резюме с hh.ru</span></summary>
                <div className="card border-danger mb-3 mt-2 pdf-container">
                    <div className="card-header"><h5><strong>Резюме с HH</strong></h5></div>
                    <div className="card-body">
                            <object className="pdf-viewer" data={Resume} type="application/pdf">
                                <a href={Resume}>
                                    <button>Альтернативный вариант pdf</button>
                                </a>
                            </object>
                    </div>
                    <div className="card-footer">
                        <a href={Resume}>Альтернативный вариант pdf</a>
                    </div>
                </div>
            </details>
        </Fragment>
    );
}