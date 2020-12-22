import PropTypes from 'prop-types';

const Section = ({ title, children }
) => {
    return <div>
        <h2>
            {title}
            {children}
        </h2>
    </div>
}



Section.propTypes = {
title: PropTypes.string.isRequired,
};

export default Section;

