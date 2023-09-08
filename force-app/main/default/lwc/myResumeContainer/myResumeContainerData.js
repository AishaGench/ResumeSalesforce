import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import aisha from '@salesforce/resourceUrl/aisha';
export const PROFILE_IMAGE = aisha

export const SOCIAL_LINKS=[
    {
        type: "linkedin",
        label: "linkedin/aisha-gench",
        link: "https://www.linkedin.com/in/aisha-gench/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/aishagench",
        link: "https://www.salesforce.com/trailblazer/aishagench",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    },
    {
        type: "github",
        label: "github/AishaGench",
        link: "https://github.com/AishaGench",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
]
export const USER_DETAILS={
    NAME:'Aisha Gench',
    ROLE:'Salesforce Developer',
    EMAIL:'aisha.gench@gmail.com',
    PHONE:'832 552 0102'
}