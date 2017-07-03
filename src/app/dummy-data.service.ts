import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const demo = [{
      'index': '579cebd2185de0ea1bd1b902',
      'id': 0,
      'guid': '81bf4e05-d914-4b40-b1a4-14b56a2cee07',
      'picture': 'assets/images/pic1.jpeg',
      'age': 40,
      'name': 'Jeri Tyson',
      'email': 'jeri.tyson@undefined.me',
      'phone': '+91 (853) 451-3675'
    },
      {
        'index': '579cebd2578e662485a8969c',
        'id': 1,
        'guid': '7071544e-9356-4465-b07e-8998bf949646',
        'picture': 'assets/images/pic2.jpeg',
        'age': 23,
        'name': 'Figueroa Stanley',
        'email': 'figueroa.stanley@undefined.info',
        'phone': '+91 (840) 558-2612'
      },
      {
        'index': '579cebd212b6e70105d494f1',
        'id': 2,
        'guid': '4dc81697-5d4e-457f-b712-596a41df550f',
        'picture': 'assets/images/pic3.jpg',
        'age': 39,
        'name': 'Ivy Smith',
        'email': 'ivy.smith@undefined.io',
        'phone': '+91 (969) 568-2563'
      },
      {
        'index': '579cebd2bf443077a78e0a7c',
        'id': 3,
        'guid': '01edf73b-84b8-4cc9-9478-da7850949990',
        'picture': 'assets/images/pic4.jpg',
        'age': 20,
        'name': 'Haley Rivas',
        'email': 'haley.rivas@undefined.biz',
        'phone': '+91 (830) 515-2439'
      },
      {
        'index': '579cebd20b492a38f218c5a5',
        'id': 4,
        'guid': 'aeadb0b5-7559-49b1-9b23-ae3788293df2',
        'picture': 'assets/images/pic5.jpg',
        'age': 25,
        'name': 'Catalina Pollard',
        'email': 'catalina.pollard@undefined.ca',
        'phone': '+91 (850) 543-2380'
      },
      {
        'index': '579cebd27205a38059d37634',
        'id': 5,
        'guid': 'c52ffd70-8a9c-4451-80e5-f945d1bfa279',
        'picture': 'assets/images/pic6.jpg',
        'age': 34,
        'name': 'Sosa Brock',
        'email': 'sosa.brock@undefined.co.uk',
        'phone': '+91 (985) 555-2530'
      },
      {
        'index': '579cebd20c085df5960ab535',
        'id': 6,
        'guid': '04badb04-4b02-4803-86c4-3bf9215663f1',
        'picture': 'assets/images/pic7.jpg',
        'age': 25,
        'name': 'Winifred Michael',
        'email': 'winifred.michael@undefined.com',
        'phone': '+91 (906) 522-2574'
      },
      {
        'index': '579cebd2b75c0c8f4fe8eead',
        'id': 7,
        'guid': 'c42877d5-5e9b-47fe-9359-ae7b8956737c',
        'picture': 'assets/images/pic10.jpg',
        'age': 32,
        'name': 'Workman Rowland',
        'email': 'workman.rowland@undefined.biz',
        'phone': '+91 (869) 450-2721'
      },
      {
        'index': '579cebd288b64ba101201ebb',
        'id': 8,
        'guid': 'd9725893-675d-4695-87ee-898a446be29b',
        'picture': 'assets/images/pic9.jpg',
        'age': 22,
        'name': 'Melanie Rice',
        'email': 'melanie.rice@undefined.us',
        'phone': '+91 (831) 569-3759'
      },
      {
        'index': '579cebd2af037127e9f894ce',
        'id': 9,
        'guid': '8b949626-5d81-4245-b28b-e9fbba7f3785',
        'picture': 'assets/images/pic10.jpg',
        'age': 29,
        'name': 'Wilkinson Calderon',
        'email': 'wilkinson.calderon@undefined.name',
        'phone': '+91 (850) 446-2309'
      },
      {
        'index': '579cebd2a9ec0920e7d0248f',
        'id': 10,
        'guid': 'da476456-a710-446d-9024-2b36520f54f6',
        'picture': 'assets/images/pic10.jpg',
        'age': 23,
        'name': 'Bullock Gardner',
        'email': 'bullock.gardner@undefined.tv',
        'phone': '+91 (920) 455-2772'
      },
      {
        'index': '579cebd2650cbdc0c7ab5244',
        'id': 11,
        'guid': 'fd3eeb23-d39d-474c-8a41-9c435bf272e7',
        'picture': 'assets/images/pic1.jpeg',
        'age': 20,
        'name': 'Cristina Abbott',
        'email': 'cristina.abbott@undefined.org',
        'phone': '+91 (911) 514-3918'
      },
      {
        'index': '579cebd2f483e1d328c9f61b',
        'id': 12,
        'guid': '048c4ff8-4d7d-494b-9dbb-72720a78bee6',
        'picture': 'assets/images/pic2.jpeg',
        'age': 32,
        'name': 'Vonda Daugherty',
        'email': 'vonda.daugherty@undefined.me',
        'phone': '+91 (978) 416-3721'
      },
      {
        'index': '579cebd2f047b99b83abaf75',
        'id': 13,
        'guid': '24cdefa6-97c8-4897-95c5-da65223b2949',
        'picture': 'assets/images/pic3.jpg',
        'age': 21,
        'name': 'Frost Thompson',
        'email': 'frost.thompson@undefined.info',
        'phone': '+91 (977) 444-3326'
      },
      {
        'index': '579cebd2b8428696ec925cfc',
        'id': 14,
        'guid': '9055804d-9e7c-4501-b970-254353095962',
        'picture': 'assets/images/pic4.jpg',
        'age': 27,
        'name': 'Hardin Mullen',
        'email': 'hardin.mullen@undefined.io',
        'phone': '+91 (903) 528-2363'
      },
      {
        'index': '579cebd206eedbfc9aa2255f',
        'id': 15,
        'guid': 'fe6178d9-8d0c-4f91-acf9-5042dfd5f7e3',
        'picture': 'assets/images/pic1.jpeg',
        'age': 28,
        'name': 'Carver Rogers',
        'email': 'carver.rogers@undefined.biz',
        'phone': '+91 (950) 511-2709'
      },
      {
        'index': '579cebd2a0ebcde3f746eaea',
        'id': 16,
        'guid': 'f9a828b2-4b9f-41f9-866b-6fd1760668c9',
        'picture': 'assets/images/pic5.jpg',
        'age': 39,
        'name': 'Alissa Mueller',
        'email': 'alissa.mueller@undefined.ca',
        'phone': '+91 (866) 478-3931'
      },
      {
        'index': '579cebd28ff6408c14bb4abf',
        'id': 17,
        'guid': 'eb66b795-bdc4-47c8-813a-786962d45956',
        'picture': 'assets/images/pic6.jpg',
        'age': 36,
        'name': 'Yolanda Horton',
        'email': 'yolanda.horton@undefined.co.uk',
        'phone': '+91 (899) 417-3020'
      },
      {
        'index': '579cebd2ecef6b2a55a82a66',
        'id': 18,
        'guid': '51305c4a-6023-4d24-a112-3506fc7db71b',
        'picture': 'assets/images/pic7.jpg',
        'age': 31,
        'name': 'Anna Sampson',
        'email': 'anna.sampson@undefined.com',
        'phone': '+91 (908) 566-2053'
      },
      {
        'index': '579cebd2c81cda4e01c0124e',
        'id': 19,
        'guid': '64056c1a-6c02-4a23-8b39-75160e4fcf30',
        'picture': 'assets/images/pic10.jpg',
        'age': 24,
        'name': 'Francisca Estes',
        'email': 'francisca.estes@undefined.biz',
        'phone': '+91 (960) 466-3494'
      },
      {
        'index': '579cebd2e78346a628b16f37',
        'id': 20,
        'guid': '7b24b566-115e-4b2b-a205-e4e167f71623',
        'picture': 'assets/images/pic9.jpg',
        'age': 32,
        'name': 'Hendrix Cruz',
        'email': 'hendrix.cruz@undefined.us',
        'phone': '+91 (923) 435-2720'
      },
      {
        'index': '579cebd27436b2bcfef11ee2',
        'id': 21,
        'guid': 'c90d5a12-f602-402b-8b85-6143d7d3e7fc',
        'picture': 'assets/images/pic10.jpg',
        'age': 39,
        'name': 'Tabatha Callahan',
        'email': 'tabatha.callahan@undefined.name',
        'phone': '+91 (848) 587-2506'
      },
      {
        'index': '579cebd2cf27766dda0b4cf4',
        'id': 22,
        'guid': '650e4db6-beae-4dc7-b224-a70bcbe00b5b',
        'picture': 'assets/images/pic10.jpg',
        'age': 23,
        'name': 'Iva Hopkins',
        'email': 'iva.hopkins@undefined.tv',
        'phone': '+91 (983) 567-3400'
      },
      {
        'index': '579cebd2c767d0f09539ec55',
        'id': 23,
        'guid': '36f1360c-f099-470c-9ec7-1c98dc8b0a20',
        'picture': 'assets/images/pic2.jpeg',
        'age': 30,
        'name': 'Mccall Kirkland',
        'email': 'mccall.kirkland@undefined.org',
        'phone': '+91 (850) 496-2329'
      },
      {
        'index': '579cebd2bcc40178bdb5416b',
        'id': 24,
        'guid': '2ee78be7-9167-48a6-9288-dd6f23904e8a',
        'picture': 'assets/images/pic3.jpg',
        'age': 22,
        'name': 'Monica Vasquez',
        'email': 'monica.vasquez@undefined.me',
        'phone': '+91 (839) 597-2312'
      },
      {
        'index': '579cebd2c7aa5a210628eb2e',
        'id': 25,
        'guid': '0e6fa72e-a82f-479a-b924-d9d95e90c9a8',
        'picture': 'assets/images/pic4.jpg',
        'age': 35,
        'name': 'Violet Whitley',
        'email': 'violet.whitley@undefined.info',
        'phone': '+91 (961) 469-3192'
      },
      {
        'index': '579cebd269a0ac0129835371',
        'id': 26,
        'guid': '3eab9f97-26c0-4fc6-b326-539c8671005d',
        'picture': 'assets/images/pic5.jpg',
        'age': 24,
        'name': 'Goodman Hogan',
        'email': 'goodman.hogan@undefined.io',
        'phone': '+91 (965) 548-3916'
      },
      {
        'index': '579cebd27828afe3e92e457a',
        'id': 27,
        'guid': 'b950d9d6-0fb7-401b-a53d-f1d83e4d724e',
        'picture': 'assets/images/pic6.jpg',
        'age': 26,
        'name': 'Adrienne Spence',
        'email': 'adrienne.spence@undefined.biz',
        'phone': '+91 (811) 519-2176'
      },
      {
        'index': '579cebd2502e31868955a5e5',
        'id': 28,
        'guid': '7ed56406-3aa0-4913-8e2a-2c1cf2b0c2e7',
        'picture': 'assets/images/pic7.jpg',
        'age': 29,
        'name': 'Leach Dejesus',
        'email': 'leach.dejesus@undefined.ca',
        'phone': '+91 (845) 594-3047'
      },
      {
        'index': '579cebd26bd44937f6d80920',
        'id': 29,
        'guid': '4a00f1d1-ef5c-4d94-9674-01d6d39282c9',
        'picture': 'assets/images/pic10.jpg',
        'age': 29,
        'name': 'Miles Sharpe',
        'email': 'miles.sharpe@undefined.co.uk',
        'phone': '+91 (877) 582-2796'
      },
      {
        'index': '579cebd2ba58ec0140b3a59c',
        'id': 30,
        'guid': 'e24ec97c-2d72-451f-9acc-1024bb740ffe',
        'picture': 'assets/images/pic9.jpg',
        'age': 27,
        'name': 'Pratt Mcdonald',
        'email': 'pratt.mcdonald@undefined.com',
        'phone': '+91 (961) 425-3597'
      },
      {
        'index': '579cebd2a54055b41b7cf3be',
        'id': 31,
        'guid': 'c59e24a1-77b7-424d-abbb-96951833d547',
        'picture': 'assets/images/pic10.jpg',
        'age': 27,
        'name': 'Buchanan Anderson',
        'email': 'buchanan.anderson@undefined.biz',
        'phone': '+91 (921) 461-3252'
      },
      {
        'index': '579cebd28d37c4685a733168',
        'id': 32,
        'guid': 'e8e52d48-418c-404a-af32-e4c15102aa1b',
        'picture': 'assets/images/pic10.jpg',
        'age': 32,
        'name': 'Eileen Juarez',
        'email': 'eileen.juarez@undefined.us',
        'phone': '+91 (935) 525-3290'
      },
      {
        'index': '579cebd23c6a80dfcb3110f4',
        'id': 33,
        'guid': '64ab279f-bf56-46de-9799-3fc2b52931b8',
        'picture': 'assets/images/pic2.jpeg',
        'age': 24,
        'name': 'Singleton Schwartz',
        'email': 'singleton.schwartz@undefined.name',
        'phone': '+91 (830) 465-3830'
      },
      {
        'index': '579cebd21e44ee513f56ea8c',
        'id': 34,
        'guid': 'b80fdfe5-dc4c-41c7-8fef-ae9819d98f99',
        'picture': 'assets/images/pic3.jpg',
        'age': 26,
        'name': 'Dunn Hill',
        'email': 'dunn.hill@undefined.tv',
        'phone': '+91 (888) 523-3240'
      },
      {
        'index': '579cebd210744154183a400c',
        'id': 35,
        'guid': '203b490d-1d3b-48da-b4d4-95951540db15',
        'picture': 'assets/images/pic4.jpg',
        'age': 31,
        'name': {
          'first': 'Mcdonald',
          'last': 'Jennings'
        },
        'email': 'mcdonald.jennings@undefined.org',
        'phone': '+91 (877) 484-3088'
      },
      {
        'index': '579cebd21a3445f673663438',
        'id': 36,
        'guid': 'c2795193-ff89-421c-aa7b-c298c7e604a7',
        'picture': 'assets/images/pic5.jpg',
        'age': 25,
        'name': 'Ida Everett',
        'email': 'ida.everett@undefined.me',
        'phone': '+91 (995) 569-2603'
      },
      {
        'index': '579cebd202c20c632534d2e1',
        'id': 37,
        'guid': 'c5efa6c3-7f1e-4354-9e78-1117236443d9',
        'picture': 'assets/images/pic6.jpg',
        'age': 31,
        'name': {
          'first': 'Natasha',
          'last': 'Blair'
        },
        'email': 'natasha.blair@undefined.info',
        'phone': '+91 (828) 470-2769'
      },
      {
        'index': '579cebd2ff07af27ef7d93dc',
        'id': 38,
        'guid': 'baf1534f-68d7-41d1-97b6-e3fe0d09552c',
        'picture': 'assets/images/pic7.jpg',
        'age': 20,
        'name': 'Ruby Roman',
        'email': 'ruby.roman@undefined.io',
        'phone': '+91 (915) 592-2002'
      },
      {
        'index': '579cebd2901c03ee12d61159',
        'id': 39,
        'guid': 'e5889dff-4751-4ed0-906d-bdf854d2e68a',
        'picture': 'assets/images/pic10.jpg',
        'age': 35,
        'name': 'Noel Cash',
        'email': 'noel.cash@undefined.biz',
        'phone': '+91 (973) 565-3197'
      },
      {
        'index': '579cebd20614fae138cc0b27',
        'id': 40,
        'guid': '9b0bb86f-871a-46ea-b81c-bb9473503f28',
        'picture': 'assets/images/pic9.jpg',
        'age': 28,
        'name': 'Whitney Oneal',
        'email': 'whitney.oneal@undefined.ca',
        'phone': '+91 (815) 542-3889'
      },
      {
        'index': '579cebd2a684c83713f20d5b',
        'id': 41,
        'guid': '35d95d3a-eb23-42ca-a783-b7e5cce752e8',
        'picture': 'assets/images/pic10.jpg',
        'age': 25,
        'name': 'Elma West',
        'email': 'elma.west@undefined.co.uk',
        'phone': '+91 (933) 599-2906'
      },
      {
        'index': '579cebd2afc4adc0ee1aa656',
        'id': 42,
        'guid': '1dbb8371-d747-4088-bab1-5f6e60e38583',
        'picture': 'assets/images/pic10.jpg',
        'age': 20,
        'name': 'Lawson Roth',
        'email': 'lawson.roth@undefined.com',
        'phone': '+91 (963) 427-3659'
      },
      {
        'index': '579cebd2ef925e785c250fe0',
        'id': 43,
        'guid': '7c168f22-3b8e-4598-a788-355424e55e30',
        'picture': 'assets/images/pic2.jpeg',
        'age': 29,
        'name': 'Connie Ingram',
        'email': 'connie.ingram@undefined.biz',
        'phone': '+91 (949) 474-3238'
      }
    ];
    return {
      heroes : demo,
      demo: demo
    };
  }
}
