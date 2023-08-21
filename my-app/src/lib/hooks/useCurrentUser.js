import { useRecoilValue } from 'recoil';
import { currentUserState } from '@/lib/atoms/currentUser';

export function useCurrentUser() {
    const currentUser = useRecoilValue(currentUserState)

    return {
        currentUser,
    }
}