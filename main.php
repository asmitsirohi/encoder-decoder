<?php

    if(isset($_POST['encodevalue'])) {
        $encodevalue = $_POST['encodevalue'];

        function encrypt($message,$encryption_key) {
            $key = hex2bin($encryption_key);
    
            $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
            $nonce = openssl_random_pseudo_bytes($nonceSize);
    
            $cipherttext = openssl_encrypt(
                $message,
                'aes-256-ctr',
                $key,
                OPENSSL_RAW_DATA,
                $nonce
            );
            return base64_encode($nonce.$cipherttext);
        }
    

        $original_string = $encodevalue;
        $private_secret_key = '1f4276388ad3214c873428dbef42243f';

        $encrypted = encrypt($original_string,$private_secret_key);

        echo $encrypted;
    }

    if(isset($_POST['decodevalue'])) {
        $decodevalue = $_POST['decodevalue'];
    
        function decrypt($message,$encryption_key) {
                $key = hex2bin($encryption_key);
        
                $message = base64_decode($message);
                $nonceSize = openssl_cipher_iv_length('aes-256-ctr');
                $nonce = mb_substr($message,0,$nonceSize, '8bit');
                $cipherttext = mb_substr($message,$nonceSize,null,'8bit');
        
                $plaintext = openssl_decrypt(
                    $cipherttext,
                    'aes-256-ctr',
                    $key,
                    OPENSSL_RAW_DATA,
                    $nonce
                );
                return $plaintext;
            }
    
            $encrypted = $decodevalue;
            $private_secret_key = '1f4276388ad3214c873428dbef42243f';
    
            $decrypted = decrypt($encrypted,$private_secret_key);
    
            echo $decrypted;

    }
    
?>