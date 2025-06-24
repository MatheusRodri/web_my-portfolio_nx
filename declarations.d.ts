import * as SR from 'scrollreveal';

declare global {
    interface Window {
        sr?: SR.ScrollRevealObject;
    }
}