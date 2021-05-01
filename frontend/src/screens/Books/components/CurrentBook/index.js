import React from 'react'
import { v4 } from 'uuid';
import { useSelector } from 'react-redux'
import ReactSpeedometer from "react-d3-speedometer"
import Subtitle from '../../../../components/Subtitle';
import PageForm from '../PageForm';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';

const CurrentBook = ({ currentBook }) => {
	const { loading:loadingUpdate, error: errorUpdate} = useSelector((state) => state.updateBook)

    return (
        <div>
            {
                loadingUpdate ? <Loader /> : errorUpdate ? <Message error={errorUpdate}></Message> : null
            }
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{ height: 200, marginRight: '4rem' }}>
                    <ReactSpeedometer 
                        forceRender={true}
                        currentValueText={currentBook.title}
                        minValue={0} 
                        maxValue={currentBook.pages} 
                        value={currentBook.currentPage}
                        startColor="rgba(220, 248, 255, 1)"
                        endColor="rgba(198, 232, 255, 0.99)" 
                        />
                </div>
                <div>
                    <Subtitle>Notes</Subtitle>
                    <ul style={{marginBottom: '1rem'}}>
                        {
                            currentBook.notes.map(note => (
                                <li key={v4()}>{note}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <PageForm book={currentBook} />
        </div>
    )
}

export default CurrentBook
