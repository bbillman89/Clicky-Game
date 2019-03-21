import React from 'react';
import NavBar from './navbar';
import TitleSection from './titleSection';
import FlexWrapper from './FlexWrapper/flexWrapper';
import ImageCard from './ImageCard/imageCard';
import images from './'

class App extends Component {
    
    state = {
        images
    }
    
    render() {
        return (
            <main>
                <NavBar />
                <TitleSection />
                <FlexWrapper>
                    {this.state.images.map(image => (
                        <ImageCard 
                            name={image.name}
                            image={image.src}
                        />
                    ))}
                </FlexWrapper>
            </main>
        )
    };
}

export default mainBody;