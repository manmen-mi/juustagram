import { ref, watchEffect } from "vue";

type supportLang = 'jp'|'ko';

interface strDict {
    [x: string]: {
        jp: string;
        ko: string;
    }
}

const lang = ref<supportLang>(<supportLang>localStorage.getItem('lang') ?? 'ko');
watchEffect(() => {
    localStorage.setItem('lang', lang.value);
})

const commonStr: strDict = {
    fav: {
        jp: "いいね！",
        ko: "좋아요"
    },
    contact: {
        jp: "Contact",
        ko: "만든놈"
    },
    refer: {
        jp: "Referenced",
        ko: "참고"
    },
    refresh: {
        jp: "Assetのリフレッシュ",
        ko: "Asset 삭제 및 새로고침",
    }
}

export default function useLangStore() {

    const getCommon = (key: keyof strDict) => commonStr[key][lang.value];

    return {
        lang,
        getCommon,
    }
}