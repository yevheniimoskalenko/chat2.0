export default function({ $auth, redirect }) {
  if ($auth.$state.user != null) {
    redirect('/chat')
  }
}
