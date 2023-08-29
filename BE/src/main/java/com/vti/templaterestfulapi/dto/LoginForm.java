package com.vti.templaterestfulapi.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginForm {
    @NotBlank
    @Size(min=3, max = 100)
    private String username;
 
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    
    @Valid
    @NotNull(message = "Device info cannot be null")
    private DeviceInfo deviceInfo;
}
