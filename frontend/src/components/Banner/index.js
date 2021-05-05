import { BannerContainer  } from './style';

export default function Banner({ children }) {
    return (
        <BannerContainer>
            {children}
        </BannerContainer>
    )
}
