export default interface ModalImpl extends UseModalImpl {
  children: React.ReactNode;
}

export interface UseModalImpl {
  open: boolean;
  setOpen(open: boolean): void;
}
