import LoadingBar from 'react-redux-loading-bar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
    return (
        <div className="fixed-top">
            <LoadingBar />
        </div>
    );
}

export default Loading;
