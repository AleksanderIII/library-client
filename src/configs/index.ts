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
            elementsPerColumn: 12
        },
        card: {
            defaultPictureUrl: 'https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png'
        }
    };
}
