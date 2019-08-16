export class AppConfig {
    public static services = {
        moneyData: {
            url: 'https://libraryserv.herokuapp.com'
        }
    };
    public static components = {
        gridSection: {
            sliderStep: 200
        },
        select: {
            columnWidth: 160,
            singleColumnSelectSize: 12,
            displayedWordLength: 12,
            elementsPerColumn: 9
        }
    };
}
