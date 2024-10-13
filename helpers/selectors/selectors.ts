export namespace s {
    /** Кнопки */
    export enum Btn {
        /** Кнопка Warning */
        Warning = ".btn-warning",
        /** Кнопка Success */
        Success = ".btn-success",
        /** Кнопка Primary */
        Primary = ".btn-primary",
        /** Кнопка с динамическим ID */
        BtnDinamicID = "button:text('Button with Dynamic ID')",
        /** Кнопка для одинарного клика */
        BtnClick = "[id='badButton']"

    }
 }

 export namespace Color {

    /** Цвета кнопок */
    export enum Btn {
        /** Цвет по умолчанию */
        Default = "rgb(0, 123, 255)",
        /** Цвет выделеной кнопки */
        Selected = "rgb(33, 136, 56)",
        /** Цвет ошибки */
        Warning = "rgb(255, 193, 7)",
        /** Цвет успеха */
        Success = "rgb(40, 167, 69)",
        /** Цвет основной кнопки */
        Primary = "rgb(0, 123, 255)"
    }

    /** Цвета рамок при выделении кнопки */
    export enum BtnBorderColor {
        /** Цвет рамки по ошибки */
        BorderWarning = "rgb(211, 158, 0)",
        /** Цвет рамки по успеху */
        BorderSuccess = "rgb(30, 126, 52)",
        /** Цвет рамки по основной кнопке */
        BorderPrimary = "rgb(0, 98, 204)"
    }   
 }