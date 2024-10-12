/** Генерации URL и работы с элементами интерфейса пользователя     
 * @param {string} baseUrl - Базовый URL, который будет использоваться для генерации полных URL.
 */    
export class UrlGenerator {
    /** Базовый URL, к которому будут добавляться параметры. */
    private baseUrl: string;

    /**
     * Генерирует полный URL на основе базового URL и параметров запроса.
     *
     * @param {UrlUI.UrlExt} urlExt - Параметр из перечисления UrlExt, который будет добавлен к базовому URL.
     *
     * @example
     * const urlGen = new UrlGenerator("http://example.com");
     * const fullUrl = urlGen.generateUrl("news");
     */
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Генератор URL для тестов по UI
     * 
     * @param {UrlExt} urlExt - Параметры запроса
     * @returns {string} Сформированный URL
     */
    public generateUrl(urlExt: UrlUI.UrlExt): string {
        return `${this.baseUrl}/${urlExt}`;
    }
}

/** URL для элементов интерфейса пользователя */
export namespace UrlUI {
    /** Элементы интерфейса пользователя */
    export enum UrlExt {
        /** Идентификатор динамического контента */
        DinamicID = "dynamicid",
        /** Атрибуты CSS класса */
        ClassAttr = "classattr",
        /** Скрытые слои на странице */
        HiddenLayers = "hiddenlayers",
        /** Задержка загрузки элементов */
        LoadDelay = "loaddelay",
        /** Данные, загружаемые через AJAX */
        AJAXData = "ajax",
        /** Задержка на стороне клиента */
        ClientDelay = "clientdelay",
        /** Событие клика */
        Click = "click",
        /** Поле для ввода текста */
        TextInput = "textinput",
        /** Полосы прокрутки */
        Scrollbars = "scrollbars",
        /** Динамическая таблица с изменяемым содержимым */
        DynamicTable = "dynamictable",
        /** Проверка текста на странице */
        VerifyText = "verifytext",
        /** Индикатор выполнения операции */
        ProgressBar = "progressbar",
        /** Видимость элементов на странице */
        Visibilly = "visibility",
        /** Пример приложения для тестирования */
        SampleApp = "sampleapp",
        /** Эффект наведения мыши */
        MouseOver = "mouseover",
        /** Неразрывный пробел (используется в текстах) */
        NonBreakingSpace = "nbsp",
        /** Элементы, перекрывающиеся друг с другом */
        OverlappedElement = "overlapped",
        /** Поддержка Shadow DOM для инкапсуляции стилей и скриптов */
        ShadowDOM = "shadowdom",
        /** Всплывающие уведомления и алерты */
        Alerts = "alerts",
        /** Загрузка файлов через интерфейс пользователя */
        FileUpload = "upload",
        /** Анимация кнопок для улучшения UX */
        AnimatedButton = "animation",
        /** Поля ввода, которые отключены для взаимодействия */
        DisabledInput = "disabledinput"
    }
}
