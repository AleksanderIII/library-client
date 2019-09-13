export class AppConfig {
    public static services = {
        moneyData: {
            moneyUrl: 'https://libraryserv.herokuapp.com/api/money',
            cardUrl: 'https://libraryserv.herokuapp.com/api/card'
        },
        userData: {
            url: 'https://libraryserv.herokuapp.com/api/user'
        },
    };
    public static components = {
        gridSection: {
            sliderStep: 200
        },
        select: {
            columnWidth: 160,
            singleColumnSelectSize: 12,
            elementsPerColumn: 12
        },
        card: {
            defaultPictureUrl: 'https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png'
        },
        imageLodaer: {
            clodinary: {
                cloudName: 'dwg7mxlg4',
                uploadPreset: 'o8pfwvbd',
                clientAllowedFormats: ['png', 'gif', 'jpeg'],
                maxFileSize: 1000000,
                showUploadMoreButton: false,
                theme: 'white',
                multiple: false,
                sources: ['local', 'url', 'dropbox'],
            },
            folderUrl: 'https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/'
        }
    };
    public static containers = {
        editor: {
            options: {
                coins: {
                    1: '1',
                    5: '5',
                    10: '10',
                    20: '20',
                    50: '50',
                    100: '100',
                    200: '200'
                },
                cash: {
                    1: '1',
                    2: '2',
                    5: '5',
                    10: '10',
                    20: '20',
                    50: '50',
                    100: '100',
                    500: '500',
                    1000: '1000'
                }
            }
        }
    };
}
