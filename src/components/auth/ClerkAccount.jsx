import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/astro/components";

const ClerkAccount = () => {
  return (
    <section>
      <SignedOut>
        <SignInButton mode="modal" class="auth-button" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </section>
  );
};

export default ClerkAccount;
