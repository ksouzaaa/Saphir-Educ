
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["telefone"];
    $message = $_POST["message"];


    $to = "saphireduc@gmail.com";
    $subject = "Messagem do formulário de contato";
    $body = "Nome: " . $name . "\n\nEmail: " . $email . "\n\nTelefone: " . $phone . "\n\nMensagem: " . $message;

    if (mail($to, $subject, $body)) {
        echo "email enviado com sucesso!!";
    } else{
        echo "houve um erro ao enviar o email.";
    }
}
?>