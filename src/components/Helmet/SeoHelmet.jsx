
import { Helmet } from 'react-helmet';

const SeoHelmet = () => {
    return (
        <Helmet>
            <title>Bistro Boss - Your Favorite Restaurant</title>
            <meta name="description" content="Order your favorite dishes online from Bistro Boss." />
            <link rel="canonical" href="https://www.bistroboss.com" />
        </Helmet>
    );
};

export default SeoHelmet;