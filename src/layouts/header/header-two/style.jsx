import styled, { themeGet, device } from "@theme/utils";

export const HeaderWrap = styled.header`
    &.absolute-header {
        position: absolute;
        width: 100%;
        z-index: 5;
    }
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const HeaderStyleCenter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
`;
export const Logo = styled.div`
    padding: 30px 0;
`;
export const HeaderMidRightSide = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const SingleActionItem = styled.a`
    height: 40px;
    min-width: 40px;
    margin-left: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background-color: transparent;
    &:hover {
        background: ${themeGet("colors.primary")};
    }
    ${device.large} {
        margin-left: 10px;
    }
    ${device.xlarge} {
        height: 45px;
        min-width: 45px;
        margin-left: 20px;
    }
`;
export const MainMenuArea = styled.div`
    li {
        a {
            color: #fff;
        }
    }
`;
export const HeaderActionArea = styled.div`
    position: relative;
    top: -0.5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const ButtonBoxArea = styled.span`
    display: none;
    margin-top: 10px;
    ${device.small} {
        display: block;
    }
`;
export const MobileMenuBtn = styled.button`
    background-color: transparent;
    border: none;
    box-shadow: none;
    height: 21px;
    margin-left: 16px;
    margin-top: 0;
    position: relative;
    width: 35px;
    vertical-align: middle;
    ${device.large} {
        display: none;
    }
    span {
        background-color: ${themeGet("colors.primary")};
        border-radius: 2px;
        display: block;
        height: 3px;
        position: absolute;
        right: 0;
        transition: 0.4s;
        width: 100%;
        &:first-of-type {
            top: 0;
            width: 30px;
        }
        &:nth-of-type(2) {
            top: calc(50% - 0.3px);
            transform: translateY(-50%);
            width: 100%;
        }
        &:last-of-type {
            bottom: 0;
            width: 25px;
        }
    }
`;
export const MobileMenuArea = styled.div`
    position: fixed;
    right: -100%;
    top: 0;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    &.mobile-menu-open {
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
        right: 0;
        .OffCanvasContent {
            transform: none;
            opacity: 1;
            visibility: visible;
        }
    }
    .OffCanvasContent {
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s;
        height: 100%;
        width: 100%;
        z-index: 2;
    }
`;
export const OffCanvasInner = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    position: relative;
    transform: translateX(0);
    transition: 0.3s;
    height: 100vh;
    width: 100%;
    z-index: 3;
`;
export const OffCanvasContent = styled.div`
    width: 310px;
    background-color: #fff;
    height: 100%;
    padding: 0 30px;
    position: relative;
    overflow-y: auto;
    transition: 0.4s;
    transition-duration: 0.4s;
    transform: translateX(100%);
    width: 445px;
    z-index: 9;
    transform: none;
    transition-delay: 0.4s;
`;
export const OffCanvasHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;
export const CloseAction = styled.div``;
export const ButtonClose = styled.button`
    box-sizing: content-box;
    background: none;
    border: none;
    color: #999999;
    font-size: 30px;
    line-height: 1;
    opacity: 1;
    background: transparent
        url(
            data:image/svg + xml,
            %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"fill="%23000"%3e%3cpathd="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/%3e%3c/svg%3e
        )
        center/1em auto no-repeat;
    border: 0;
`;
