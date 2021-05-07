import { useDispatch, useSelector } from 'react-redux'

import { v4 } from 'uuid';
import ReactSpeedometer from "react-d3-speedometer"
import Subtitle from '../../../../components/Subtitle';
import PageForm from '../PageForm';
import Loader from '../../../../components/Loader';
import Message from '../../../../components/Message';
import CrudButton from '../../../../widgets/CrudButton';

import { updateBook } from '../../../../redux/actions/bookActions';

import { Note } from './style'

import { AiOutlineDelete } from 'react-icons/ai';

const CurrentBook = ({ currentBook }) => {
    const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { loading:loadingUpdate, error: errorUpdate} = useSelector((state) => state.updateBook)

	const updateItem = (note) => {
		dispatch(updateBook(userInfo.token, currentBook._id, {
            notes: currentBook.notes.filter(item => item !== note)
        }));
	};

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
                    <ol style={{marginBottom: '1rem'}}>
                        {
                            Array.isArray(currentBook.notes) && currentBook.notes.length > 0 && currentBook.notes.map(note => (
                                <li key={v4()} style={{display: 'flex', alignItems: 'center'}}>
                                    <Note>{note}</Note>
                                    <CrudButton handleClick={() => updateItem(note)} loading={loadingUpdate}>
                                        <AiOutlineDelete />
                                    </CrudButton>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <PageForm book={currentBook} />
        </div>
    )
}

export default CurrentBook
