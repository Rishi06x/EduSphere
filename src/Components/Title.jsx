import './Title.css';

const Title = ({title , subTitle}) => {
    return (
        <div className="title-container">
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
        </div>
    );
}

export default Title;