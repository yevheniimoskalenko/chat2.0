export default function({ $auth, redirect }) {
  if ($auth.loggendIn != null) {
    redirect('/chat')
  }
}
