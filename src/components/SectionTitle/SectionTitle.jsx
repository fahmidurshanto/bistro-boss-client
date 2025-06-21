
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/11 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">{subHeading}</p>
            <h1 className="text-4xl uppercase border-y-2 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;