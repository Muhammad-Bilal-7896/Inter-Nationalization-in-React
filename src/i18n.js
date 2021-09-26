import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//Importing Firebase 
/////////////////////////////////////
// import firebase from 'firebase';
// import 'firebase/firestore';
// import { query, orderBy } from "firebase/firestore";
// import 'firebase/auth';
//import { FirebaseData,getData } from './Components/FirebaseData';
//////////////////////////////////////
import LanguageDetector from 'i18next-browser-languagedetector';
//Importing Languages
import English from './LanguageJsonFiles/en';
import Germany from './LanguageJsonFiles/de';
import Chinese from './LanguageJsonFiles/chi';

const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item.translation.description.short_name]: item,
        };
    }, initialValue);
};

const fun = () => {
    var arr = {};

    //Resources Object
    const Resources = {
        en: English,
        de: Germany,
        chi: {
            translation: {
                description: {
                    short_name: "chi",
                    id: 3,
                    part1: "本讲义是关于什么的。本讲义将帮助您了解段落是如何形成的，如何发展更有力的段落，以及如何完整而清晰地表达您的想法。什么是段落？段落是论文的基石。许多学生根据长度来定义段落：一个段落是一组至少五个句子，一个段落是半页长等。但实际上，句子之间思想的统一性和连贯性才构成了一个段落。段落被定义为“一组句子或形成一个单元的单个句子”（Lunsford and Connors 116）。长度和外观并不能决定论文中的一个部分是否是一个段落。例如，在某些写作风格中，尤其是新闻风格，一个段落可能只有一个句子长。最终，段落是支持一个主要思想的一个句子或一组句子。在本讲义中，我们将其称为“控制思想”，因为它控制着段落其余部分发生的事情。我如何决定在一个段落中放什么？在开始确定特定段落的构成之前，您必须首先确定论文的论点和工作论文陈述。您试图向读者传达的最重要的想法是什么？每个段落中的信息必须与该想法相关。换句话说，你的段落应该提醒你的读者，你的论文和每个段落中的信息之间存在着反复出现的关系。一篇工作论文就像一颗种子，你的论文和想法会从中成长。整个过程是一个有机的过程——从种子到成熟论文的自然过程，论文中的所有想法之间都存在直接的、家族性的关系。关于在段落中放入什么内容的决定始于思想种子的萌芽；这种“萌芽过程”被称为头脑风暴。头脑风暴的技巧有很多；无论你选择哪一个，这个段落发展阶段都不能跳过。建造段落就像建造一座摩天大楼：必须有一个精心规划的基础来支撑你正在建造的东西。基础的任何裂缝、不一致或其他损坏都可能导致整张纸崩溃。",
                    part2:"学习反应",
                    Nav: "React 中的国际化",
                    head: "欢迎使用 React 翻译器",
                    url: "关于",
                    home: "家",
                    subHome: "这是主页",
                    subAbout: "这是关于页面"
                }
            }
        },
        ar: {
            translation: {
                description: {
                    short_name: "ar",
                    id: 4,
                    part1:"موضوع هذه النشرة ستساعدك هذه النشرة على فهم كيفية تكوين الفقرات ، وكيفية تطوير فقرات أقوى ، وكيفية التعبير عن أفكارك بشكل كامل وواضح. ما هي الفقرة؟ الفقرات هي اللبنات الأساسية للأوراق. يعرّف العديد من الطلاب الفقرات من حيث الطول: الفقرة هي مجموعة من خمس جمل على الأقل ، والفقرة بطول نصف صفحة ، إلخ. يتم تعريف الفقرة على أنها مجموعة من الجمل أو جملة واحدة تشكل وحدة' (Lunsford and Connors 116). لا يحدد الطول والمظهر ما إذا كان المقطع في الورقة فقرة أم لا. على سبيل المثال ، في بعض أنماط الكتابة ، وخاصة الأنماط الصحفية ، يمكن أن تكون الفقرة بطول جملة واحدة فقط. في النهاية ، الفقرة هي جملة أو مجموعة من الجمل التي تدعم فكرة رئيسية واحدة. في هذه النشرة ، سوف نشير إلى هذا باسم 'الفكرة المسيطرة'، لأنها تتحكم في ما يحدث في بقية الفقرة. كيف أقرر ما أضعه في فقرة؟ قبل أن تتمكن من البدء في تحديد تكوين فقرة معينة ، يجب عليك أولاً تحديد الحجة وبيان أطروحة العمل لورقتك البحثية. ما هي أهم فكرة تحاول نقلها للقارئ؟ يجب أن تكون المعلومات الواردة في كل فقرة مرتبطة بهذه الفكرة. بمعنى آخر ، يجب أن تذكر فقراتك القارئ بوجود علاقة متكررة بين أطروحتك والمعلومات الواردة في كل فقرة. تعمل أطروحة العمل كبذرة تنمو منها ورقتك وأفكارك. العملية برمتها هي عملية عضوية - تطور طبيعي من بذرة إلى ورقة كاملة حيث توجد علاقات عائلية مباشرة بين جميع الأفكار الواردة في الورقة. يبدأ القرار بشأن ما يجب وضعه في فقراتك بإنبات بذرة من الأفكار ؛ تُعرف 'عملية الإنبا' هذه باسم العصف الذهني. هناك العديد من تقنيات العصف الذهني. أيًا كانت المرحلة التي تختارها ، لا يمكن تخطي هذه المرحلة من تطوير الفقرة. يمكن أن يكون بناء الفقرات بمثابة بناء ناطحة سحاب: يجب أن يكون هناك أساس جيد التخطيط يدعم ما تقوم ببنائه. يمكن أن تتسبب أي شقوق أو تناقضات أو فساد آخر في الأساس في انهيار الورق بالكامل",
                    part2: "تعلم React",
                    Nav: "التدويل في React",
                    head: "مرحبًا بك في React",
                    url: "حول",
                    home: "الصفحة الرئيسية",
                    subHome: "هذه هي الصفحة الرئيسية",
                    subAbout:"هذا عن الصفحة"
                }
            }
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////Retreiving firebase data from web
    // Now retreiving the data
    //////////////////////////////Here all data retreiving is working////////////////////////////
    // const db = firebase.firestore();
    // //Data Retreiving for Auth
    // db.collection(`Languages`)
    //     .get()
    //     .then(snapshot => {
    //         let data = [];
    //         snapshot.forEach(element => {
    //             data.push(Object.assign({
    //                 "id": element.id,
    //                 "translation": element.translation
    //             }, element.data()))
    //         })

    //         const language_array = [];

    //         for (let i = 0; i < data.length; i++) {
    //             //console.log(data[i].translation.description.short_name);
    //             let language_label = data[i].translation.description.short_name;
    //             language_array.push(language_label);
    //         }
    //         console.log(language_array);

    //         arr = convertArrayToObject(data, 1);
    //     })

    //console.log(`data for current selected user `,FirebaseData());
    //////////////////////////////////////////////////////////////////////////////////////////Retreiving firebase data from web
    //Resources Object
    return Resources;
}

let data = fun();

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: data
    });

export default i18n;